     // connect to Moralis server
      const serverUrl = "ServerUrl";
      const appId = "appId";
      const MasterKey = "Master_key";

      Moralis.start({ serverUrl, appId , MasterKey});
//login
      let login =async ()=>{
        Moralis.authenticate().then(function (user) {
        console.log('Log in');
    })
      }
      //upload img
      let saveFile = async()=>{
        // Save file input to IPFS
            const data = fileInput.files[0]
            const file = new Moralis.File(data.name, data)
            await file.saveIPFS();
            console.log(file.ipfs());
            console.log(file.hash());
            return file.ipfs();
      }
      //metadata
      let uploadmetadata =async (imageURL)=>{

          let name = document.getElementById('fileName').value;
        const metadata= {
         "name" : name,
         "img":imageURL
         }
        const file = new Moralis.File("file.json", {base64 : btoa(JSON.stringify(metadata))});
        await file.saveIPFS();
        console.log(file.ipfs());
      }
 async function upload(){
    const image =await saveFile()
    await uploadmetadata(image);
  }