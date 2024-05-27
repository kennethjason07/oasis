import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = 'https://ktochlnejgiiifqmdrfr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0b2NobG5lamdpaWlmcW1kcmZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4MDIwOTEsImV4cCI6MjAzMjM3ODA5MX0.MiI3ReHsHvUQ925b_ytJ0vmvuDYbePbXtN3EPy9GtwE';
const supabase = createClient(supabaseUrl, supabaseKey);

async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    console.error('Error signing in:', error);
  }
}

signInWithGoogle();
