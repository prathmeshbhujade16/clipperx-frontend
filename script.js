async function generateClip(){

  const url = document.getElementById("youtubeUrl").value;

  const result = document.getElementById("result");

  result.innerHTML = "Generating clips...";

  try{

    const response = await fetch("YOUR_BACKEND_URL/generate",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        youtubeUrl:url
      })
    });

    const data = await response.json();

    result.innerHTML = `
      <h3>Transcript</h3>
      <p>${data.transcript}</p>
    `;

  }catch(err){
    result.innerHTML = "Error generating clips";
  }
}
