"use client"
import { useState } from "react";
import useProfile from "../../../store/useProfile"
import Image from "next/image";


export default function Home() {

    const { loading, setLoading } = useProfile();
    const [data, setData] = useState({});
    async function handleApi() {
        setLoading(true);
        try {
            const response = await fetch('https://api.github.com/users/dadanhdyt');
            setData(await response.json());
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false);
        }
        console.log(loading);

    }

    return (
        <>
            <button disabled={loading} onClick={handleApi} className="bg-blue-500 disabled:opacity-80 rounded-lg ring-1 shadow p-3 mt-5 text-white ">Load Profile</button>
            {
                <div className="mt-5 shadow-lg ring-1 p-5 rounded flex flex-col gap-3">
                    <img alt="" className="rounded-xl" width={"200px"} height={"200px"} src={data?.avatar_url} />
                    <div className="">
                        <span className="text-2xl text-slate-600">{data?.name}</span>
                    </div>
                    <div className="">
                        <p><b>Username:</b>{data?.login}</p>
                        <p><b>Company:</b>{data?.company}</p>
                        <p><b>Followers:</b>{data?.followers}</p>
                        <p><b>Following:</b>{data?.following}</p>
                        <p>
                            <b> Bio:</b> <i>
                                {data?.bio}
                            </i>
                        </p>
                        <a className="bg-blue-500 px-5 py-2 inline-block text-white rounded mt-3" href={data.url}>Visit On Github</a>
                    </div>
                </div>
            }
        </>
    )
}
