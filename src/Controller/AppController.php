<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends Controller
{
    /**
    * @Route("/")
    */
    public function home()
    {
        $products = [
            [
                'id' => 1,
                'name' => 'Tardis candies',
                'price' => 12.99,
                'image' => 'images/bonbons-tardis.jpeg',
            ],
            [
                'id' => 2,
                'name' => 'Superman opener',
                'price' => 9.99,
                'image' => 'images/decapsuleur-superman.jpeg',
            ],
            [
                'id' => 3,
                'name' => 'Heart mug',
                'price' => 7.99,
                'image' => 'images/mug-coeur-pixel.jpeg',
            ],
            [
                'id' => 4,
                'name' => 'Pacman salt',
                'price' => 14.99,
                'image' => 'images/sel-poivre-pacman.jpeg',
            ],
            [
                'id' => 5,
                'name' => 'Bat-signal',
                'price' => 17.99,
                'image' => 'images/torche-batman.jpeg',
            ],
            [
                'id' => 6,
                'name' => 'WonderWoman shoes',
                'price' => 21.99,
                'image' => 'images/chausson-wonderwoman.jpeg',
            ]
        ];

        $basketProducts = [
            [
                'productId' => 1,
                'productName' => 'Tardis candies'
            ]
        ];

        $todoListItems = [
            1 => [
                'task' => 'Travel to Paris',
                'status' => 'Done',
            ],
            2 => [
                'task' => 'Learn about vue',
                'status' => 'todo',
            ],
            3 => [
                'task' => 'Drink some beers',
                'status' => 'todo',
            ],
        ];

        return $this->render('pages/home.html.twig', [
            'products' => $products,
            'basketProducts' => $basketProducts,
            'todoListItems' => $todoListItems,
        ]);

    }
}