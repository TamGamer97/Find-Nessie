import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
    

// Create a single supabase client for interacting with your database
const supabase = createClient('https://mxudavvyhrgrgbouctxt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14dWRhdnZ5aHJncmdib3VjdHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MDQzMDksImV4cCI6MjAyNDk4MDMwOX0.NtvDa_odRxSDgQE57YuHiv0ckcRt0Cya4YNjDCaNHDU')



export async function getData()
{
    const { data, error } = await supabase
        .from('Games') // table
        .select() // collumn
        if(error)
        {
            console.log(error)
        }
        if(data)
        {
            return data
        }
}
// getData()