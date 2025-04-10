import { BsStarFill } from "react-icons/bs"

const ReviewsSection = () => {
  return (
    <section id="reviews">
    <div className="row">
      <div className="container">
        <div className="text-[32px] text-[#032b42] text-center mb-8 font-bold">What our members say</div>
        <div className="max-w-[600px] mx-auto">
          <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
            <div className="text-[#032b41] flex gap-4 mb-4">
              <div className="review__name">Hanna M.</div>
              <div className="flex">
                <BsStarFill className="w-4 h-4 fill-[#0564f1]" />
              </div>
            </div>
            <div className="text-[#394547] tracking-[0.3px] leading-[1.4]">
              This app has been a <b>game-changer</b> for me! It&apos;s saved me so
              much time and effort in reading and comprehending books. Highly
              recommend it to all book lovers.
            </div>
          </div>
          <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
            <div className="text-[#032b41] flex gap-4 mb-4">
              <div className="review__name">David B.</div>
              <div className="flex">
                <BsStarFill className="w-4 h-4 fill-[#0564f1]" />
              </div>
            </div>
            <div className="text-[#394547] tracking-[0.3px] leading-[1.4]">
              I love this app! It provides
              <b>concise and accurate summaries</b> of books in a way that is
              easy to understand. It&apos;s also very user-friendly and intuitive.
            </div>
          </div>
          <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
            <div className="text-[#032b41] flex gap-4 mb-4">
              <div className="review__name">Nathan S.</div>
              <div className="flex">
                <BsStarFill className="w-4 h-4 fill-[#0564f1]" />
              </div>
            </div>
            <div className="text-[#394547] tracking-[0.3px] leading-[1.4]">
              This app is a great way to get the main takeaways from a book
              without having to read the entire thing.
              <b>The summaries are well-written and informative.</b>
              Definitely worth downloading.
            </div>
          </div>
          <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
            <div className="text-[#032b41] flex gap-4 mb-4">
              <div className="review__name">Ryan R.</div>
              <div className="flex">
                <BsStarFill className="w-4 h-4 fill-[#0564f1]" />
              </div>
            </div>
            <div className="text-[#394547] tracking-[0.3px] leading-[1.4]">
              If you&apos;re a busy person who
              <b>loves reading but doesn&apos;t have the time</b> to read every
              book in full, this app is for you! The summaries are thorough
              and provide a great overview of the book&apos;s content.
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn max-w-[300px] flex items-center">Login</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ReviewsSection