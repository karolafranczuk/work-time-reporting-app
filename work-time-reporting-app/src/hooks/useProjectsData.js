import { useState, useEffect } from 'react';

const useProjectsData = () => {
    const [projects, setProjects] = useState([]);

    const fetchProjectsList = async () => {
        console.log("start");
        const res = await fetch('http://localhost:3002/public/projects.json');
        
        const resProjects = await res;

        console.log(resProjects);
        setProjects(resProjects);
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