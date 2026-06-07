interface AdPageLayoutProps {
  children: React.ReactNode;
}

const AdPageLayout: React.FC<AdPageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full md:bg-slate-200 md:px-6 lg:px-24 md:py-12 lg:py-24">
      <div className="min-h-screen w-full flex flex-col md:flex-row md:min-h-[640px] md:rounded-2xl md:bg-white md:shadow-sm md:overflow-hidden">
        <div
          className="hidden md:flex md:w-2/5 lg:w-1/3 items-center justify-center p-6 bg-gray-50 shrink-0"
          aria-hidden="true"
        >
          <img
            className="max-h-[600px] w-full object-cover rounded-lg"
            src="/photos/advertising-background.png"
            alt=""
          />
        </div>

        <div className="relative flex-1 w-full min-h-screen md:min-h-0 md:w-3/5 lg:w-2/3">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
            style={{
              backgroundImage: "url('/photos/advertising-background.png')",
            }}
          />
          <div className="absolute inset-0 bg-white/90 md:hidden" />

          <div className="relative z-10 p-4 pb-12 sm:p-6 md:p-8 md:bg-white md:pb-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPageLayout;
