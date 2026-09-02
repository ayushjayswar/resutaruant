import React, { useState } from 'react'
import { foodMenu } from "../assets/foodmenu";
import ItemModal from "../components/ItemModal";

const Menu = () => {

    const [SelectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Show only 3 items initially
    const [showAll, setShowAll] = useState(false);

    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    }

    const closeModel = () => {
        setSelectedItem(null);
        setIsModalOpen(false);
    }

    // Decide how many food items to show
    const visibleFood = showAll
        ? foodMenu
        : foodMenu.slice(0, 3);

    return (
        <div id='menu' className='py-15 bg-white'>

            <div className='container mx-auto px-6'>

                {/* Heading */}
                <div className='text-center'>

                    <h2
                        className='text-3xl sm:text-4xl mb-4 font-bold text-black underline underline-offset-5 decoration-red-600'
                    >
                        Our Menu
                    </h2>

                    <p className='text-gray-700 mb-5'>
                        Crafted with passion and the finest ingredients
                    </p>

                </div>

                <div className='max-w-4xl mx-auto'>

                    {/* Food Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>

                        {
                            visibleFood.map((food, index) => {

                                return (
                                    <div
                                        key={index}
                                        onClick={() => openModal(food)}
                                        className='
                                            rounded-2xl
                                            shadow-2xl
                                            overflow-hidden
                                            hover:scale-105
                                            transition
                                            duration-300
                                            cursor-pointer
                                        '
                                    >

                                        <img
                                            className='w-full h-96 object-cover'
                                            src={food.image}
                                            alt={food.title}
                                        />

                                        <div className='p-4'>

                                            <div className='flex justify-between items-center mb-4'>

                                                <h1 className='text-xl text-gray-900 font-semibold'>
                                                    {food.title}
                                                </h1>

                                                <span className='text-red-600 font-semibold'>
                                                    {food.price}
                                                </span>

                                            </div>

                                            <p className='text-sm text-gray-800'>
                                                ingredients : {food.ingredients}
                                            </p>

                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                    {/* Modal */}
                    <ItemModal
                        isopen={isModalOpen}
                        onClose={closeModel}
                        item={SelectedItem}
                    />

                    {/* View Full Menu Button */}
                    {
                        foodMenu.length > 3 && (
                            <div className='text-center'>

                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className='
                                        bg-red-600
                                        hover:bg-red-700
                                        rounded-full
                                        px-8
                                        py-3
                                        mt-10
                                        text-white
                                        cursor-pointer
                                        transition
                                        duration-300
                                    '
                                >
                                    {showAll ? 'Show Less' : 'View Full Menu'}
                                </button>

                            </div>
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default Menu