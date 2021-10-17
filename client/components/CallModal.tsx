import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useCallUpdate } from "../contexts/CallsContext";
import { Call, Call as CallType } from "../types";
import { dateToMonthDayYear } from "../utils/dateToMonthDayYear";
import { secondsToTimeString } from "../utils/secondsToTimeString";
import { unarchiveCall } from "../utils/unarchiveCall";

interface CallModalProps {
  isOpen: boolean;
  closeModal: () => void;
  call: CallType;
}

export const CallModal: React.FC<CallModalProps> = ({
  isOpen,
  closeModal,
  call,
}) => {
  const updateCall = useCallUpdate();

  const unarchive = () => {
    const _call: Call = JSON.parse(JSON.stringify(call));
    _call.is_archived = false;
    unarchiveCall(call);
    updateCall(_call);
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-25 backdrop-filter backdrop-blur-sm" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-black"
              >
                {call.from}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-xs italic text-black">
                  {dateToMonthDayYear(call.created_at)}
                </p>
                <p className="text-sm text-black">
                  {secondsToTimeString(call.duration)}
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                  onClick={closeModal}
                >
                  Close
                </button>
                {call.is_archived && (
                  <button
                    type="button"
                    className="ml-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={unarchive}
                  >
                    Unarchive
                  </button>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
