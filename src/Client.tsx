// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   "https://lqsizgxkuddsvqzfzzrd.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxc2l6Z3hrdWRkc3ZxemZ6enJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxNjYzNzIsImV4cCI6MTk4MTc0MjM3Mn0.F5l1IzJH6GDt9J7089DbZ1Duo7ASOBrfx_yAGqJqtsg"
// );

// export { supabase };

import { createClient } from "@supabase/supabase-js";
console.log(process.env.NODE_ENV);

const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SUPABASE_DEV_URL
    : process.env.REACT_APP_SUPABASE_PRO_URL;

const key =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SUPABASE_DEV_KEY
    : process.env.REACT_APP_SUPABASE_PRO_KEY;
console.log(key, url);

const supabase = createClient(url as string, key as string);

export { supabase };
