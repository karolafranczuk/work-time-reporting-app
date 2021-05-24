import { useState, useEffect } from 'react';

const useProjectsData = () => {
    const [projects, setProjects] = useState([]);

    const fetchProjectsList = async () => {
        console.log("start");
        const res = await fetch('../../data/projects.json');
        console.log("1")
        const resProjects = await res.json();
        console.log(resProjects);
        setProjects(resProjects);
        console.log(resProjects);
    }
    useEffect(() => {
        fetchProjectsList()
    }, [])

    const handleClick = () => {
        fetchProjectsList();
    }
    return {projects, fetchProjectsList};
}

export default useProjectsData;