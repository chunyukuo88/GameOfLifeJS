import React from 'react';
import { useAsync } from "react-async"

export const fetchUser = async ({ playerId }, { signal }) => {
    const url = 'https://jsonplaceholder.typicode.com/users/';
    const options = { method: "GET", headers: { "Content-type": "text/plain" }};
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
}

export default function MyComponent () {
    const { data, error, isPending } = useAsync({ promiseFn: fetchUser });
    if (isPending) return 'Loading...';
    if (error) return `Something went wrong: ${error.message}`;
    if (data)
        return (
            <div>
                <strong>User data:</strong>
                <pre>Name: {JSON.stringify(data[0].name)}</pre>
                <pre>Company: {JSON.stringify(data[0].company.name)}</pre>
            </div>
        );
    return (
        <div>

        </div>
    );
};
