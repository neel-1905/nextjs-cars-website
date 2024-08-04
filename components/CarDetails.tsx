import { CarDetailsProps } from "@/types";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";

const CarDetails = (props: CarDetailsProps) => {
  const { car, closeModal, isOpen } = props;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className={`relative z-10`}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                leave="ease-in duration-200 scale-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel
                  className={` p-6 relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5`}
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src={`/close.svg`}
                      alt="Close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex flex-1 flex-col gap-3">
                    <div className="relative  bg-pattern h-40 bg-cover bg-center rounded-lg">
                      <div className="relative w-[80%] h-44 my-3 object-contain mx-auto">
                        <Image
                          src={`/hero.png`}
                          fill
                          alt={car.model}
                          className="px-3 w-full"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={`/hero.png`}
                          fill
                          alt={car.model}
                          className="px-3 object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={`/hero.png`}
                          fill
                          alt={car.model}
                          className="px-3 object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={`/hero.png`}
                          fill
                          alt={car.model}
                          className="px-3 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-gray capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="font-semibold capitalize">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
