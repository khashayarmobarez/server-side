

const Albums = ({albums}) => {

    console.log(albums)

    return (
        <div>
            {
                albums.map( album => <p key={album.id} >{album.id} {album.title}</p>)
            }
        </div>
    );
};

export default Albums;

export async function getServerSideProps() {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
    
    return {    
        props: {
            albums: data
        }
    }
}