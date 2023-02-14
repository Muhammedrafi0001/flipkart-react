// import {createClient } from "@supabase/supabase-js"

// const supabase = createClient ('https://xxovfbklhfdmdnhhatfw.supabase.co',
// process.env.SUPABASE_KEY
// )


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xxovfbklhfdmdnhhatfw.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4b3ZmYmtsaGZkbWRuaGhhdGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQxMDQyMzIsImV4cCI6MTk4OTY4MDIzMn0.qtRfb2PXsMg-TAzqdaFfNhMZMi-o9qu0ItJ_L8iX6Kc"
const supabase = createClient(supabaseUrl,supabaseKey)
export default supabase;