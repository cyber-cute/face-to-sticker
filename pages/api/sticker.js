export default async function handler(req, res) {
    const imageUrl = req.body.image
    const prompt = req.body.prompt
    
    const revived = await fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + process.env.REPLICATE_API_TOKEN,
        },
        body: JSON.stringify({
            version: "a99a32fdaa9a9650cfc7900d54323d0d247dac69f7abb05eac0e742687a25662",
            input: {
                image: imageUrl,
                prompt: prompt,
                steps: 20,
                width: 1024,
                height: 1024,
                upscale: false,
                upscale_steps: 10,
                negative_prompt: "",
                prompt_strength: 7,
                ip_adapter_noise: 0.5,
                ip_adapter_weight: 0.2,
                instant_id_strength: 1
            }
        })
    })

    const data = await revived.json()
    const url = data.urls.get

    let revivedImage = null
    while (!revivedImage) {

            const finalUrl = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Token " + process.env.REPLICATE_API_TOKEN,
                },
            });
    
            const response = await finalUrl.json()
    
            if (response.status === "succeeded") {
                revivedImage = response.output
            } else if (response.status === "failed") {
                break;
            } else {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }

    }

    res.status(200).json(revivedImage ? {status:"success", url: revivedImage} : {status: "failed", message: "something went wrong"})

}
