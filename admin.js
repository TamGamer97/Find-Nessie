import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
    

// Create a single supabase client for interacting with your database
const supabase = createClient('https://mxudavvyhrgrgbouctxt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14dWRhdnZ5aHJncmdib3VjdHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MDQzMDksImV4cCI6MjAyNDk4MDMwOX0.NtvDa_odRxSDgQE57YuHiv0ckcRt0Cya4YNjDCaNHDU')

import {getData} from './index.js'



function checkPass()
{
    const attempt = document.getElementById('passInp').value
    if(attempt == 'Janimator')
    {
        activate()
    }else{
        location.href = '/'
    }
}

document.getElementById('checkBtn').onclick = () => {
    checkPass()
}

async function uploadtodb()
{
    console.log('uploading...')
    document.getElementById('uploaddb').style.backgroundColor = 'transparent'
    document.getElementById('txtUploadDb').innerHTML = '<img src="/Assets/Loading.gif" style="width: 40px; " />'
    document.getElementById('uploaddb').onclick = () => {

    }

    async function uploadTxt(url, t, id)
    {
        const { data, error } = await supabase
            .from('Games') // table
            .insert([{'target': t, 'imageURL':url, 'index': id}]) // collumn
            .select() // needed or else data is not returned, but insertion still works
            if(error)
            {
                console.log(error)
                document.getElementById('txtUploadDb').innerHTML = 'failed'
            }
            console.log(data)
            if(data)
            {
                console.log(data)

                console.log('Fully uploaded')
                document.getElementById('txtUploadDb').innerHTML = 'done'
                document.getElementById('uploaddb').onclick = () => {
                    location.href = '/'
                }
            }
    }

    async function getImages()
    {
        const Games = await getData()
        return Games
    }

    const f = document.getElementById('fileInp').files[0]
    const r = radius
    const t = targetLocation
    const indexOfLevel = (await (getImages())).length


    var timestamp = new Date().valueOf()

    const { data, error } = await supabase
        .storage
        .from('GamesImages')
        .upload(JSON.stringify(timestamp), f)
        if(error)
        {
            console.log(error)
        }
        if(data)
        {
            console.log(data)
            const url = 'https://mxudavvyhrgrgbouctxt.supabase.co/storage/v1/object/public/GamesImages/'+JSON.stringify(timestamp)
            console.log(url)

            console.log(t)
            console.log('r ' + r )


            uploadTxt(url, t, indexOfLevel)

        }

}

document.getElementById('uploaddb').onclick = () => {
    uploadtodb()
}