import CardEpisode from "../../../../components/CardEpisode";
import Hero from "../../../../components/Hero";
import TopQueue from "../../../../components/TopQueue";
import PropTypes from "prop-types";

const Show = ({ totalEp, heroOpt }) => {
  console.log(totalEp);
  return (
    <section>
      <div>
        <div>
          <Hero
            information={{
              podcast: "podcast",
              type: "PODCAST",
              imageUrl: heroOpt?.imageUrl,
              name: heroOpt?.name,
              owner: heroOpt?.owner,
            }}
          />
        </div>
        <div className="text-gray-400 relative ">
          <div className="w-full h-56 absolute bg-gradient-to-t from-transparent to-gray-700 -z-10"></div>
          <div className="px-8">
            <TopQueue />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "62% auto",
              gap: "0 60px",
            }}
            className="px-8 w-full"
          >
            <div>
              <h1 className="text-2xl mb-5 font-bold text-gray-200">
                All Episodes
              </h1>
              {totalEp &&
                totalEp.map((ep, index) => {
                  return <CardEpisode key={ep?.id} ep={ep} index={index} />;
                })}
            </div>
            <div className="flex flex-col justify-start items-start max-w-full ">
              <h1 className="text-2xl mb-5 font-bold text-gray-200">About</h1>
              <div className="w-full overflow-hidden">
                <p className="text-gray-300">{heroOpt?.description}</p>
              </div>
              <div className="flex space-x-5">
                <a href="/self">Self</a>
                <a href="/how-to">How to</a>
                <a href="/personal">Personal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Show.propTypes = {
  totalEp: PropTypes.array,
  heroOpt: PropTypes.object,
};

export default Show;
