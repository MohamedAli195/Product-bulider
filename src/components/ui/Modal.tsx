import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { ReactNode } from 'react'
interface IProps {
    isOpen:boolean,
    open:()=>void,
    close:()=>void,
    children:ReactNode,
    title?:string
    hasButton:boolean
}
export default function Modal({isOpen,open,close,title,children,hasButton}:IProps) {
  

  return (
    <>
    {
      hasButton ? <Button
      onClick={open}
      className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
    >
      Open dialog
    </Button> :
    null
    }
      

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl">
                    {title && 
                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                    {title}
                  </DialogTitle> }
                  <div className='mt-4'>

                  </div>
                  {children}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}