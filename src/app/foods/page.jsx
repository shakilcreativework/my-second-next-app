import FoodCard from "@/components/FoodCard";

const FoodsPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const data = await res.json();
    console.log(data.data);
    return (
        <div>
            <FoodCard data={data.data} />
        </div>
    );
};

export default FoodsPage;