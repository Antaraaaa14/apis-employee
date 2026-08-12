const { createClient } = require('@supabase/supabase-js');

const supabaseURL = 'https://rlbjrbvjaylomryzvccp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsYmpyYnZqYXlsb21yeXp2Y2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzMjc3NDAsImV4cCI6MjEwMTkwMzc0MH0.Hlb4oA8Tl4CxsaeAB4WFqBe-97bzBRxAgYDEkobTWjA';

const supabase = createClient(supabaseURL, supabaseAnonKey);

console.log('Supabase connected');
console.log('--------------------');

module.exports = supabase;