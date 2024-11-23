
import { useEffect } from 'react';
function calcular(a: number, b: number, callback: any): number {
    return callback(a, b);
}
function sumar(a: number, b: number): number {
    return a + b;
}
function resta(a: number, b: number): number {
    return a - b;
}
export const HomePage = () => {

    //Useeffec no puedo ser asycrono
    useEffect(() => {
        console.log(calcular(5, 3, sumar));
        console.log(calcular(5, 3, resta));
        console.log("Iniciando solicitud web");
        const postData = async () => {
            fetch('http://localhost:3001/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: 'fooa',
                    body: 'bara',
                    userId: 1
                })
            })
        }
        const fetchData = async () => {
            const llamada = await fetch('http://localhost:3001/posts')
            const data = await llamada.json()
            console.log("data", data);

        }
        fetchData();
        postData()
        /*  fetch('http://localhost:3001/posts')
             .then(
                 response => response.json()
             ).then(data => console.log(data))
         console.log("Solicitud web finalizada"); */
        console.log("Solicitud web finalizada")
    }, [])
    return <h1>HomePage</h1>
    /* return <MainLayout><h1>HomePage</h1></MainLayout> */
}

