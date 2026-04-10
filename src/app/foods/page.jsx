import FoodCard from "@/components/FoodCard";

const FoodsPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const data = await res.json();
    const foods = data.data;
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:6 my-10">
                {
                    foods.map((food, idx) => <FoodCard key={idx} food={food} />)
                }
            </div>
        </div>
    );
};

export default FoodsPage;