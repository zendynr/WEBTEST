import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix with /api
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Received contact form submission:", JSON.stringify(req.body, null, 2));
      
      // Validate the request body using the schema from shared/schema.ts
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        console.warn("Invalid contact form data:", JSON.stringify(result.error.errors, null, 2));
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: result.error.errors 
        });
      }
      
      // Store the contact message in the database
      const contactMessage = await storage.createContactMessage(result.data);
      
      console.log("Contact form stored successfully with ID:", contactMessage.id);
      
      return res.status(200).json({ 
        message: "Contact form submitted successfully",
        data: contactMessage
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      console.error("Error processing contact form:", errorMessage);
      
      if (error instanceof Error && error.message.includes("database")) {
        return res.status(500).json({ 
          message: "Database error: Unable to store your message. Please try again later." 
        });
      }
      
      return res.status(500).json({ 
        message: "An error occurred while processing your request. Please try again later." 
      });
    }
  });

  // Get all contact messages (this would typically be protected by authentication)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      return res.status(500).json({ 
        message: "An error occurred while retrieving contact messages" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
