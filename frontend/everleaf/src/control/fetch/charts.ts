import { ScatterPlotFetch } from "../types/Chart"

export const fetchScatter = async ({field_x, field_y} : { field_x:string, field_y: string }): Promise<ScatterPlotFetch> => {

    try {

        const reqUrl = `${process.env.BASE_BACKEND_URL}/api/scatterplot?field_x=${field_x}&field_y=${field_y}`

        const response = await fetch(reqUrl)

        if (!response.ok) {
            throw new Error(`HTTP error fetchScatter. Status: ${response.status}`)
        }

        const scatterData: ScatterPlotFetch = await response.json()
        return scatterData

    } catch (error) {
        console.error("Failed to fetch scatter data:", error)
        throw error
    }
}


/*
    "use client"

    import { useState, useEffect } from "react"
    import { fetchScatter } from "@/lib/fetchScatter"

    ...

    const [data, setData] = useState<{x:number[], y:number[]} | null>(null)

    useEffect(() => {
        async function load() {
            const result = await fetchScatter({ field_x, field_y })
            setData(result)
        }
        load()
    }, [field_x, field_y])

    if (!data) return <div>Loading...</div>

*/