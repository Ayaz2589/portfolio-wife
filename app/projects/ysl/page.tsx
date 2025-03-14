const YSLPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="mb-4 text-4xl font-bold">YSL Architecture Projects</h1>

      {/* Introductory Text */}
      <p className="mb-8 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna at
        arcu blandit dapibus. Proin vel dignissim metus, at congue massa. Morbi
        lacinia, magna vitae aliquet gravida, nibh metus placerat ex, sed
        egestas dui eros in nibh. Integer sed massa ac ante gravida dignissim.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <img
          src="https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/2.JPG"
          alt="Architecture Project 1"
          className="h-auto w-full rounded-lg object-cover shadow-md"
        />
        <img
          src="https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/3.JPG"
          alt="Architecture Project 2"
          className="h-auto w-full rounded-lg object-cover shadow-md"
        />
        <img
          src="https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/4.JPG"
          alt="Architecture Project 3"
          className="h-auto w-full rounded-lg object-cover shadow-md"
        />
        <img
          src="https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/5.JPG"
          alt="Architecture Project 4"
          className="h-auto w-full rounded-lg object-cover shadow-md"
        />
        <img
          src="https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/6.JPG"
          alt="Architecture Project 5"
          className="h-auto w-full rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Additional Text Section */}
      <div className="mt-8">
        <p className="text-lg">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; In sit amet nisl ac elit cursus facilisis. Sed
          varius, sapien eu convallis tristique, ex lorem porttitor nunc, vel
          consequat ligula justo id ex. Curabitur finibus efficitur turpis, at
          pharetra mauris aliquet sit amet.
        </p>
      </div>
    </div>
  );
};

export default YSLPage;
