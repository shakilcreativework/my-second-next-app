// {
//     "id": "food_005",
//     "category": "dish",
//     "dish_name": "Grilled Fish Salad Bowl with Chimichurri and Mustard Sauce",
//     "alternative_names": [
//         "Grilled Salmon Power Salad",
//         "Herb-Grilled Fish Lettuce Bowl with Dipping Sauces",
//         "Mediterranean-Style Grilled Fish Veggie Plate"
//     ],
//     "main_ingredients": [
//         "Grilled fish fillet (salmon, tuna, or firm white fish like sea bass/cod)",
//         "Lettuce or mixed greens (base)",
//         "Cherry tomatoes (halved)",
//         "Red onion (sliced thinly)",
//         "Mushrooms (sautéed or grilled)",
//         "Fresh rosemary (garnish and likely in marinade)",
//         "Chimichurri sauce (parsley, garlic, chili, vinegar, olive oil – red/green variant)",
//         "Mustard-based sauce (honey mustard, Dijon, or creamy mustard aioli)",
//         "Olive oil, lemon (implied for marinade/grill)",
//         "Seasonings: salt, pepper, garlic, herbs"
//     ],
//     "approximate_nutrition_per_serving": {
//         "calories": "450-650 kcal (varies with fish type and portion)",
//         "protein": "35-50 g (high from fish)",
//         "carbohydrates": "15-25 g (mostly from veggies)",
//         "fat": "25-40 g (healthy fats from fish and olive oil)",
//         "fiber": "6-10 g"
//     },
//     "rating": 4.5,
//     "price": 500,
//     "possible_price_in_dhaka": {
//         "home_cooked": "BDT 300-500 (fish like salmon/rui/katla + veggies; imported salmon pricier)",
//         "street_food_or_small_restaurant": "BDT 400-700",
//         "cafe_or_healthy_eatery": "BDT 600-1000 (common in upscale spots like Gulshan/Banani cafes, health-focused restaurants, or delivery apps)"
//     },
//     "cuisine": "Mediterranean-inspired / Modern Healthy Fusion (with South American chimichurri influence and Western salad bowl style)",
//     "origin_and_popularity": "Popular in US, Europe, Australia as nutritious grilled protein salads; chimichurri adds Argentine flair; trending in global healthy cafes and social media meal preps; increasingly available in urban Bangladesh via fusion eateries, salad bars, or premium food delivery",
//     "cooking_steps": [
//         "Marinate the fish: Rub fillet with olive oil, minced garlic, chopped rosemary (or herbs), salt, pepper, and lemon juice/zest. Let rest 15-30 minutes (or longer in fridge).",
//         "Prepare sauces: Make chimichurri by finely chopping parsley, garlic, red chili, mix with olive oil, red wine vinegar, salt, and optional oregano. For mustard sauce, whisk Dijon mustard, honey, mayo/yogurt, lemon juice, and seasonings until creamy.",
//         "Cook mushrooms (optional): Sauté sliced mushrooms in olive oil with garlic, salt, pepper until golden and tender. Set aside.",
//         "Grill the fish: Preheat grill pan, outdoor grill, or broiler to medium-high. Grill fish 4-6 minutes per side (depending on thickness) until charred grill marks form and fish flakes easily (internal temp ~63°C/145°F for medium). Rest briefly.",
//         "Assemble the bowl: Layer fresh lettuce/greens as base. Arrange grilled fish in center. Scatter halved cherry tomatoes, sliced red onions, cooked mushrooms around. Garnish with fresh rosemary sprigs.",
//         "Serve: Add small bowls of chimichurri and mustard sauce on the side for drizzling/dipping. Optional: squeeze extra lemon over top for brightness. Enjoy fresh!"
//     ],
//     "image_link": "https://res.cloudinary.com/dj493l0jy/image/upload/v1773919302/foods/7b210282-1035-42da-a858-4ed58127633f.png"

import Image from "next/image";
import Link from "next/link";

// }
const FoodCard = ({ food }) => {
    const {id, dish_name, image_link, category, price } = food;
    console.log(food);
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image className="object-cover" src={image_link} alt="dish_name" width={400} height={300} priority style={{ width: '100%', height: 'auto' }} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg">
                    {dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><small>{category}</small></p>
                <p>Price: ${price}</p>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Card</button>
                    <Link href={`/foods/${id}`}>
                        <button className="btn btn-btn-ghost">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;