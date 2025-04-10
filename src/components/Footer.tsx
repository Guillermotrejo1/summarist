
const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="relative flex justify-between text-sm">
            <div className="z-1">
              <div className="font-semibold mb">Actions</div>
              <div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Summarist Magazine</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Cancel Subscription</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Help</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Contact us</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="font-semibold mb">Useful Links</div>
              <div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Pricing</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Summarist Business</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Gift Cards</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Authors & Publishers</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="font-semibold mb-4 text-lg text-[#032b41] ">Company</div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <a className="flex">About</a>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <a className="flex">Careers</a>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <a className="flex">Partners</a>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <a className="flex">Code of Conduct</a>
                </div>
              </div>
            </div>
            <div className="z-1">
              <div className="font-semibold mb">Other</div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <a className="flex">Sitemap</a>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <a className="flex">Legal Notice</a>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <a className="flex">Terms of Service</a>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <a className="flex">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-[#032b41] font-medium">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer