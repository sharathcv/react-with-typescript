export async function get(url: string) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch data.");
    }

    const data =  await response.json() as unknown; // its good to set the type to unknown as it will prevent accessing
                                                    // property and will enforce to implement the actual type at some point
                                                    // Using any on the hand does not enforce this
    return data;
}