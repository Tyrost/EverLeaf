import { FormDataType } from "@/components/slides/FormSlide"

export const postFormInfo = async (formData: FormDataType) => {
    try {
        const reqUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users`
        const response = await fetch(reqUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.error("Submit error:", err);
    }
};