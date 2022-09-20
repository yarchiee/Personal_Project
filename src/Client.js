import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://qvtvnktztxmigxjrdmig.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2dHZua3R6dHhtaWd4anJkbWlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM1NzQyMjUsImV4cCI6MTk3OTE1MDIyNX0.xgQ64SJAQm6IwANje2Go4gKgLF38QIYwzxvNeh7G7vY"
);

export { supabase };
