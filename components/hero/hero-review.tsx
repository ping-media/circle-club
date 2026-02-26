import StackedAvatar from "../shared/stacked-avatar";

const REVIEW_USERS = [
  { src: "/images/user/user_1.webp", alt: "User 1" },
  { src: "/images/user/user_2.webp", alt: "User 2" },
  { src: "/images/user/user_3.webp", alt: "User 3" },
];

const RATING = 4.9;
const REVIEW_COUNT = 180;

const HeroReview = () => {
  const filledDots = Math.round(RATING);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        {REVIEW_USERS.map((user, index) => (
          <StackedAvatar
            key={`user-image-${index}`}
            src={user.src}
            alt={user.alt}
            index={index}
          />
        ))}
      </div>

      {/* Rating Info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <Dots filledDots={filledDots} />

          <span className="text-white text-sm font-light font-space">
            {RATING} <span className="text-white/65">/ 5</span>
          </span>
        </div>

        <span className="text-white text-sm tracking-[0.3em] uppercase font-space">
          <span className="text-white/65">Based on</span> {REVIEW_COUNT}{" "}
          Verified Reviews
        </span>
      </div>
    </div>
  );
};

export default HeroReview;

const Dots = ({ filledDots }: { filledDots: number }) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: filledDots }).map((_, i) => (
        <span
          key={i}
          className={`w-3 h-3 rounded-full ${
            i < filledDots ? "bg-white" : "bg-white/30"
          }`}
        />
      ))}
    </div>
  );
};
