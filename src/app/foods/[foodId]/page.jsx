import Image from "next/image";

// {
//     "calories": "400-600 kcal (for ~200-300g paneer portion; varies with oil/yogurt)",
//     "protein": "25-40 g (high from paneer)",
//     "carbohydrates": "10-20 g (low, mostly from marinade/veggies)",
//     "fat": "25-40 g (from paneer fat, oil, yogurt)",
//     "fiber": "2-5 g"
// }

const FoodDetail = async ({ params }) => {
    const { foodId } = await params;
    // console.log(foodId);
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const { id, dish_name, image_link, main_ingredients, category, price, approximate_nutrition_per_serving } = data.data;

    console.log(approximate_nutrition_per_serving);

    const value = Object.entries(approximate_nutrition_per_serving).map(([key, value], index) => console.log('key:', key, 'value:', value));

    return (
        <div className="my-10">
            <div>
                <h2>Show details of food: {foodId}</h2>
                <h3 className="text-xl">{dish_name}</h3>
                <Image className="object-cover" src={image_link} alt="dish_name" width={400} height={300} priority style={{ width: '100%', height: 'auto' }} />
                <h2 className="text-2xl">Ingredients: {main_ingredients.length}</h2>
                <div className="space-y-6">
                    <ul>
                        {
                            main_ingredients.map((ingredient, idx) => <li className="list-disc" key={idx}>{ingredient}</li>)
                        }
                    </ul>
                    <hr />
                    <ul>
                        {
                            Object.entries(approximate_nutrition_per_serving).map(([key, value]) => <li className="list-disc" key={key}>{value}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;