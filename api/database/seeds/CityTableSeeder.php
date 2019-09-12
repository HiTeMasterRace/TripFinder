<?php

use App\City;
use Illuminate\Database\Seeder;

class CityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(City::class)->create([
            'name'=>'Athenes',
            'country_id' => 1,
            'budget'=>140,
            'location'=>'37.9794500, 23.7162200',
            'description'=>'Destination réputée pour son passé antique et ses monuments historiques, Athènes est aussi une ville attractive et intrigante, animée de jour comme de nuit. Entre les vestiges de l\'Acropole, l\'Agora, le Parthénon et les nombreux musées, les centres d\'intérêts ne manquent pas ! N\'oubliez pas de monter jusqu\'au sommet du mont Lycabette pour admirer les lumières de la capitale de la Grèce, considérée comme le berceau de la démocratie.',
            'filename'=>'Athenes.jpg',
            'temperature'=>22
        ]);
        factory(City::class)->create([
            'name'=>'Rome',
            'country_id' => 2,
            'budget'=>45,
            'location'=>'41.8919300, 12.5113300',
            'description'=>'Un voyage dans la ville éternelle, une lune de miel sur la Piazza Navona, une prière sous la coupole du Vatican, une pièce jetée dans la Fontaine de Trevi, quelques jours de vacances au pied du colysée.... Pour un séjour inoubliable, Rome demeure la destination rêvée',
            'filename'=>'Rome.jpg',
            'temperature'=>12
        ]);
        factory(City::class)->create([
            'name'=>'Montréal',
            'country_id' => 3,
            'budget'=>322,
            'location'=>'45.5088400, -73.5878100',
            'description'=>'Quelques jours de vacances chez nos lointains cousins ? Un voyage d\'affaires à organiser dans la métropole canadienne ? Une simple envie de profiter de la richesse patrimoniale de cette belle province francophone ? Cosmopolite et attachante, Montréal constitue une destination aux multiples attraits, des hauteurs arborées du Mont-Royal au musée des Beaux-Arts en passant par la vieille ville, le port et la place d\'Armes. En prime, une vie culturelle et nocturne particulièrement active pour un séjour rythmé à souhait...',
            'filename'=>'Montreal.jpg',
            'temperature'=>6
        ]);
        factory(City::class)->create([
            'name'=>'Réunion',
            'country_id' => 4,
            'budget'=>567,
            'location'=>'-20.8823100, 55.4504000',
            'description'=>'L\'île de la Réunion est un département français de l\'océan Indien. Elle est réputée pour son intérieur volcanique recouvert de forêt tropicale, ses récifs de corail et ses plages. Son site le plus emblématique est le piton de la Fournaise, un volcan actif qui peut être gravi et s\'élève à 2 632 m d\'altitude. Le piton des Neiges, un immense volcan éteint, et les 3 caldeiras de la Réunion (amphithéâtres naturels formés par des volcans qui se sont effondrés) sont également des spots d\'escalade.',
            'filename'=>'Reunion.jpg',
            'temperature'=>29
        ]);
        factory(City::class)->create([
            'name'=>'Moscou',
            'country_id' => 5,
            'budget'=>250,
            'location'=>'55.7522200, 37.6155600',
            'description'=>'Vous rêvez d’arpenter la Place Rouge, de découvrir le Kremlin ou de passer une soirée au théâtre Bolchoï ? N’attendez plus et offrez-vous un séjour de rêve dans la cité des Tsars et des Babouchkas…
Un voyage d’affaires à organiser à Moscou ? La capitale Russe, où vient de sortir de terre la très moderne Moskva-City, le centre d’affaires international de Moscou, vous tend les bras.',
            'filename'=>'Moscou.jpg',
            'temperature'=>1
        ]);
        factory(City::class)->create([
            'name'=>'Londres',
            'country_id' => 6,
            'budget'=>40,
            'location'=>'51.5085300, -0.1257400',
            'description'=>'Londres, la capitale de l\'Angleterre et du Royaume-Uni, est une ville moderne dont l\'histoire remonte à l\'époque romaine. En son centre se dressent l\'imposant Parlement, l\'emblématique Big Ben et l\'abbaye de Westminster, lieu de couronnement des monarques britanniques. De l\'autre côté de la Tamise, le London Eye, la grande roue, offre une vue panoramique sur le South Bank Center, et toute la ville.',
            'filename'=>'Londres.jpg',
            'temperature'=>8
        ]);
        factory(City::class)->create([
            'name'=>'Tel Aviv',
            'country_id' => 7,
            'budget'=>317,
            'location'=>'32.0808800, 34.7805700',
            'description'=>'Tel Aviv-Jaffa est la deuxième ville d’Israël. La ville blanche qui borde la méditerranée, est souvent surnommée « la bulle » en référence à son atmosphère dynamique, influencée par l’importante communauté artistique, les plages et les nombreux clubs et bars qui en font une ville résolument moderne. Un séjour à Tel Aviv est l’occasion de visiter le Musée Haaretz, ou le Musée d\'Histoire, puis de flâner au marché de Carmel avant de se rendre sur la promenade du front de mer du quartier historique de Jaffa.',
            'filename'=>'Tel_Aviv.jpg',
            'temperature'=>22
        ]);
        factory(City::class)->create([
            'name'=>'New York',
            'country_id' => 8,
            'budget'=>435,
            'location'=>'40.7142700, -74.0059700',
            'description'=>'New York est une ville composée de 5 arrondissements à l\'embouchure du fleuve Hudson et de l\'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l\'Empire State Building et l\'immense Central Park. Le théâtre de Broadway est situé sur Times Square.',
            'filename'=>'New_York.jpg',
            'temperature'=>12
        ]);
        factory(City::class)->create([
            'name'=>'Sao Paulo',
            'country_id' => 9,
            'budget'=>554,
            'location'=>'-23.5475000, -46.6361100',
            'description'=>'São Paulo, centre financier dynamique du Brésil, compte parmi les villes les plus populeuses du monde, et possède de nombreuses institutions culturelles et une riche tradition architecturale. Ses bâtiments emblématiques vont de sa cathédrale néogothique au gratte-ciel Prédio Martinelli de 1929, en passant par l\'Edifício Copan de l\'architecte moderniste Oscar Niemeyer. Le Pátio do Colégio de style colonial marque l\'endroit où les prêtres jésuites ont fondé la ville en 1554.',
            'filename'=>'Sao_Paulo.jpg',
            'temperature'=>23
        ]);
        factory(City::class)->create([
            'name'=>'Cuba',
            'country_id' => 10,
            'budget'=>511,
            'location'=>'23.1330200, -82.3830400',
            'description'=>'Cuba est un État insulaire communiste des Caraïbes. On y trouve des plages de sable spectaculaires et des champs de tabac pour la production des cigares légendaires. La capitale, La Havane, est riche de maisons aux façades pastel, de voitures des années 1950 et d\'une architecture hispano-coloniale du XVIe siècle dans la vieille Havane. On peut écouter de la salsa dans des clubs de danse et assister à des spectacles de cabaret au célèbre Tropicana.',
            'filename'=>'Cuba.jpg',
            'temperature'=>29
        ]);
    }
}
