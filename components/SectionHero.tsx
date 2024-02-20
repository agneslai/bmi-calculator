"use client"

const SectionHero = () => {
  return (
    <section className="section-grid section-padding">
      {/* <div className="absolute w-[978px] h-[737px] bg-red-100 -z-50" /> */}
      <div className="col-span-5">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-dark-blue title text-[60px]">Body Mass Index Calculator</h1>
          <p className="text-blue-grey">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
        </div>
      </div>

      <div className="col-start-7 col-span-6">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <div className="w-full bg-blue-100 rounded-[16px] p-[32px]">
            <p>Enter Your details below</p>
            <p>Enter Your details below</p>
            <p>Enter Your details below</p>
            <p>Enter Your details below</p>
            <p>Enter Your details below</p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default SectionHero