// main.ts
/*
Developer: Francisco Ostolaza 
Date Created: August 02, 2025  
Date Updated: August 02, 2025 
Description:
This file serves as the entry point for the Angular application.
It includes necessary polyfills for browser compatibility,
configures AWS Amplify for authentication and backend services using a JSON 
configuration file, logs the configuration for debugging purposes, and 
bootstraps the root AppComponent with the application's configuration. 
This setup ensures the app initializes correctly with routing, HTTP client, animations, 
and SVG icon support.

*/ 

// Imports
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { Amplify } from 'aws-amplify';
import amplifyOutputs from '../amplify_outputs.json';

// Polyfills
(window as any).global = window;
(window as any).process = { env: { DEBUG: undefined } };

// Amplify Configuration
Amplify.configure(amplifyOutputs);
console.log('Amplify configured:', Amplify.getConfig()); // Debug: Check config

// Bootstrap Application
bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
