import Image from "next/image";

const FoodDetail = async ({params}) => {
    const {foodId} = await params;
    // console.log(foodId);
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const {id, dish_name, image_link, category, price} = data.data;

    return (
        <div className="my-10">
            <div>
                <h2>Show details of food: {foodId}</h2>
                <h3 className="text-xl">{dish_name}</h3>
                <Image className="object-cover" src={image_link} alt="dish_name" width={400} height={300} priority style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    );
};

export default FoodDetail;