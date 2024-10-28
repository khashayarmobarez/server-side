import Link from "next/link";


const Albums = ({albums}) => {

    // console.log(albums)

    return (
        <div>
            {
                albums.map( album => <Link href={`albums/${album.id}`} key={album.id}>
                    <p>{album.id} {album.title}</p>
                </Link>)
            }
        </div>
    );
};

export default Albums;

export async function getServerSideProps(context) {

    // req(request and response could be very useful)
    const { params, req, res, query } = context;
    
    console.log('generating albums page')
    // used serve-json db in this file
    const response = await fetch('http://localhost:3060/albums')
    const data = await response.json()
    
    return {    
        props: {
            albums: data
        }
    }
}