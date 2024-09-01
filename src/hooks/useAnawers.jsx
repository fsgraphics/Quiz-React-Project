import { getDatabase, orderByKey, query, ref, } from 'firebase/database';
import React, { useEffect, useState } from 'react';

const useAnawers = ({videoID}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    // console.log(answers);
    useEffect(() => {
        async function fetchAnawers() {
            const db = getDatabase();
            const answerRef = ref(db, "answers/" + videoID + "questions");
            const answerQuery = query(answerRef, orderByKey());

            try {
               setError(false);
               setLoading(true); 
               // request firebase database
               const snapshot = await get(answerQuery);
               setLoading(false);
               setAnswers((pervAnswers) => {
                return [...pervAnswers, ...Object.values(snapshot.val())];
               });
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchAnawers();
    },[videoID])

    return {
        loading,
        error,
        answers,
    }
};

export default useAnawers;