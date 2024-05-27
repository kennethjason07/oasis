import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = 'https://ktochlnejgiiifqmdrfr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b2NobG5lamdpaWlmcW1kcmZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4MDIwOTEsImV4cCI6MjAzMjM3ODA5MX0.MiI3ReHsHvUQ925b_ytJ0vmvuDYbePbXtN3EPy9GtwE'; // Replace with your actual Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'LOGIN_WITH_GOOGLE') {
    // Open a new tab with the login page URL
    chrome.tabs.create({ url: 'login.html' });
  }
});
