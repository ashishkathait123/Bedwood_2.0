import { useEffect, useState } from "react";
import axios from "axios";

const BedList = () => {
    const [beds, setBeds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("http://localhost/mybed/fetch_beds.php")
            .then(response => {
                setBeds(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError("Failed to load data. Check your backend.");
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Available Beds</h1>
            {loading && <p>Loading beds...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {beds.length === 0 && !loading && <p>No beds available.</p>}
                {beds.map((bed) => (
                    <div key={bed.id} style={{ border: "1px solid #ddd", padding: "10px", width: "250px", textAlign: "center" }}>
                        <img src={bed.image} alt={bed.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                        <h2>{bed.name}</h2>
                        <p>{bed.description}</p>
                        <p style={{ fontWeight: "bold", color: "green" }}>${bed.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BedList;
