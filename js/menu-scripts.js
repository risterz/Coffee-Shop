// Bean Haven Café - Menu Interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Menu item data
    const menuItems = {
        // Hot Coffee
        "espresso": {
            title: "Espresso",
            price: "$2.50",
            description: "A bold and rich single shot of coffee, perfect for a quick caffeine boost. Served in a 2 oz cup.",
            image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=600&h=400&fit=crop",
            allergyInfo: "No common allergens."
        },
        "americano": {
            title: "Americano",
            price: "$3.50",
            description: "Espresso diluted with hot water, smooth and balanced. 8 oz serving for a more mellow coffee experience.",
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&h=400&fit=crop",
            allergyInfo: "No common allergens."
        },
        "cappuccino": {
            title: "Cappuccino",
            price: "$4.50",
            description: "Espresso with steamed milk and foam, creamy and frothy. 6 oz cup with equal parts espresso, steamed milk, and milk foam.",
            image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&h=400&fit=crop",
            allergyInfo: "Contains dairy. Ask for plant-based alternatives."
        },
        "latte": {
            title: "Latte",
            price: "$4.75",
            description: "Espresso with steamed milk and light foam, rich and velvety. 8 oz cup with a double shot of espresso and silky steamed milk.",
            image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=600&h=400&fit=crop",
            allergyInfo: "Contains dairy. Ask for plant-based alternatives."
        },
        
        // Iced Coffee
        "iced-americano": {
            title: "Iced Americano",
            price: "$4.00",
            description: "Chilled espresso with cold water, refreshing. 12 oz glass served over ice for a cool coffee experience.",
            image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&h=400&fit=crop",
            allergyInfo: "No common allergens."
        },
        "cold-brew": {
            title: "Cold Brew",
            price: "$4.50",
            description: "Slow-brewed coffee for 12 hours, smooth and bold. Served over ice in a 12 oz glass with a rich, less acidic flavor profile.",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&h=400&fit=crop",
            allergyInfo: "No common allergens."
        },
        "iced-latte": {
            title: "Iced Latte",
            price: "$5.00",
            description: "Espresso, cold milk, and ice, refreshing and smooth. 16 oz glass with double shot of espresso.",
            image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc39?q=80&w=600&h=400&fit=crop",
            allergyInfo: "Contains dairy. Ask for plant-based alternatives."
        },
        
        // Teas
        "earl-grey": {
            title: "Earl Grey",
            price: "$3.50",
            description: "Classic black tea with bergamot, aromatic and bold. Served in an 8 oz cup with optional lemon or milk.",
            image: "https://source.unsplash.com/random/600x400/?earl-grey-tea",
            allergyInfo: "No common allergens."
        },
        "green-tea": {
            title: "Green Tea",
            price: "$3.50",
            description: "Delicate and refreshing green tea with subtle floral notes. Served in an 8 oz cup, perfect for a light caffeine boost.",
            image: "https://source.unsplash.com/random/600x400/?green-tea",
            allergyInfo: "No common allergens."
        },
        "chamomile": {
            title: "Chamomile",
            price: "$3.75",
            description: "Soothing herbal infusion with floral notes, caffeine-free. Served in an 8 oz cup, perfect for relaxation.",
            image: "https://source.unsplash.com/random/600x400/?chamomile-tea",
            allergyInfo: "No common allergens."
        },
        
        // Pastries
        "butter-croissant": {
            title: "Butter Croissant",
            price: "$3.50",
            description: "Flaky, buttery pastry, perfect with coffee. Freshly baked every morning.",
            image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&h=400&fit=crop",
            allergyInfo: "Contains gluten and dairy."
        },
        "chocolate-muffin": {
            title: "Chocolate Muffin",
            price: "$4.00",
            description: "Moist chocolate muffin, rich and indulgent. Baked with premium cocoa and chocolate chips.",
            image: "https://images.unsplash.com/photo-1604882406385-6278cabe8498?q=80&w=600&h=400&fit=crop",
            allergyInfo: "Contains gluten, dairy, and eggs."
        },
        "cinnamon-roll": {
            title: "Cinnamon Roll",
            price: "$4.25",
            description: "Swirled pastry with cinnamon sugar filling and vanilla glaze. A sweet treat to complement your coffee.",
            image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=600&h=400&fit=crop",
            allergyInfo: "Contains gluten, dairy, and eggs."
        },
        "almond-danish": {
            title: "Almond Danish",
            price: "$4.25",
            description: "Flaky pastry with sweet almond filling and sliced almonds on top. Brushed with a light glaze for extra sweetness.",
            image: "https://source.unsplash.com/random/600x400/?danish-pastry",
            allergyInfo: "Contains gluten, dairy, and nuts (almonds)."
        },
        "blueberry-scone": {
            title: "Blueberry Scone",
            price: "$3.75",
            description: "Tender scone loaded with fresh blueberries. Slightly sweet and perfect with a cup of tea or coffee.",
            image: "https://source.unsplash.com/random/600x400/?blueberry-scone",
            allergyInfo: "Contains gluten and dairy."
        },
        
        // Daily Specials
        "monday-mocha": {
            title: "Monday Mocha",
            price: "$5.00",
            description: "Espresso, chocolate syrup, steamed milk, and whipped cream. Monday exclusive, 12 oz cup.",
            image: "https://images.unsplash.com/photo-1571658734974-e513dfbc45a0?q=80&w=600&h=400&fit=crop",
            allergyInfo: "Contains dairy. Ask for plant-based alternatives."
        },
        "tuesday-tiramisu": {
            title: "Tuesday Tiramisu Latte",
            price: "$5.50",
            description: "Latte with mascarpone and cocoa flavors, inspired by the classic Italian dessert. 12 oz cup of pure indulgence.",
            image: "https://source.unsplash.com/random/600x400/?tiramisu-coffee",
            allergyInfo: "Contains dairy. May contain traces of alcohol flavoring."
        },
        "wednesday-whiskey": {
            title: "Wednesday Whiskey Caramel Cream",
            price: "$5.75",
            description: "Coffee with whiskey-flavored caramel (non-alcoholic) and cream. 12 oz cup with a rich, complex flavor profile.",
            image: "https://source.unsplash.com/random/600x400/?caramel-coffee",
            allergyInfo: "Contains dairy. Non-alcoholic whiskey flavoring."
        },
        "thursday-toffee": {
            title: "Thursday Toffee Nut Latte",
            price: "$5.50",
            description: "Rich toffee and nutty flavors in our signature latte. 12 oz cup with a sweet, buttery finish.",
            image: "https://source.unsplash.com/random/600x400/?toffee-latte",
            allergyInfo: "Contains dairy and nuts."
        },
        "friday-frappe": {
            title: "Friday Frozen Frappe",
            price: "$6.00",
            description: "Blended coffee treat to celebrate the weekend. 16 oz glass of blended coffee, ice, and your choice of flavor.",
            image: "https://source.unsplash.com/random/600x400/?frappe",
            allergyInfo: "Contains dairy. Ask for plant-based alternatives."
        },
        "seasonal-blend": {
            title: "Seasonal Blend",
            price: "$4.75",
            description: "Limited-time coffee blend with notes of the season. Ask your barista about this week's special.",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&h=400&fit=crop",
            allergyInfo: "No common allergens."
        }
    };
    
    // Get the modal elements
    const modal = document.getElementById('item-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');
    const modalAllergy = document.getElementById('modal-allergy');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-modal');
    
    // Get all the menu items
    const menuItemElements = document.querySelectorAll('.menu-item');
    
    // Add click event to menu items
    menuItemElements.forEach(item => {
        // Make the entire menu item clickable
        item.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item');
            openItemModal(itemId);
        });
        
        // Handle the "View Details" button specifically
        const detailsBtn = item.querySelector('.details-btn');
        if (detailsBtn) {
            detailsBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent the parent click event
                const itemId = item.getAttribute('data-item');
                openItemModal(itemId);
            });
        }
    });
    
    // Function to open modal with item details
    function openItemModal(itemId) {
        const item = menuItems[itemId];
        
        if (item) {
            // Populate modal content
            modalTitle.textContent = item.title;
            modalPrice.textContent = item.price;
            modalDescription.textContent = item.description;
            modalAllergy.textContent = item.allergyInfo;
            modalImg.src = item.image;
            modalImg.alt = item.title;
            
            // Show the modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
            
            // Set focus to modal for accessibility
            modal.setAttribute('aria-hidden', 'false');
            modal.focus();
        }
    }
    
    // Close modal when clicking the close button
    closeModal.addEventListener('click', closeItemModal);
    
    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeItemModal();
        }
    });
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeItemModal();
        }
    });
    
    // Function to close the modal
    function closeItemModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Re-enable scrolling
        modal.setAttribute('aria-hidden', 'true');
    }
}); 