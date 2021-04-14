addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if(request.url.match(/^http:/)){
    let url = request.url.replace(/^http:/, 'https:')
    return new Response("", {
      headers: {
        "location": url,
      },
      status: 301
    })
  } else {
    return await fetch(request)
  }
}