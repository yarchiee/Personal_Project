import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://lqsizgxkuddsvqzfzzrd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxc2l6Z3hrdWRkc3ZxemZ6enJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxNjYzNzIsImV4cCI6MTk4MTc0MjM3Mn0.F5l1IzJH6GDt9J7089DbZ1Duo7ASOBrfx_yAGqJqtsg"
);

export { supabase };
