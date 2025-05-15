import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { sendContactEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix with /api
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using the schema from shared/schema.ts
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: result.error.errors 
        });
      }
      
      // Store the contact message in the database
      const contactMessage = await storage.createContactMessage(result.data);
      
      // Log the contact form submission (removed email sending)
      try {
        await sendContactEmail(contactMessage);
        console.log('Contact form submission recorded successfully');
      } catch (error) {
        console.error('Error logging contact form submission:', error);
      }
      
      return res.status(200).json({ 
        message: "Contact form submitted successfully",
        data: contactMessage
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
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
