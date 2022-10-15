/* eslint-disable react/no-children-prop */
import { FC, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useToggle } from 'ahooks'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
interface SlideOvers0 {
  state: boolean
  toggle: () => void
  setLeft: () => void
}
const code = `
# Hola
## Hola
### Hola 
#### Hola 
##### Hola 
- [ ] Task list 1
- [ ] Pending task list 2
- [x] Completed task list 3
- [x] Completed task list 4 
`
export const SlideOvers0: FC<SlideOvers0> = ({ state, toggle, setLeft }) => {
  // const [state, setOpen] = useState(true)

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={setLeft}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Example Prescription</Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" >
                          <div className='prose'>

                          <ReactMarkdown
                            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                            children={`${code}`}
                            rehypePlugins={[rehypeRaw]}
                            // rehypePlugins={[rehypeHighlight]}
                            components={{
                              // u({node, ...props}) { return <u style={{textDecoration: 'underline'}} {...props} />} ,
                              code({ node, inline, className, children, ...props }: any) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                  <>

                                    <SyntaxHighlighter
                                      // unwrapDisallowed={true}

                                      children={String(children).replace(/\n$/, '')}
                                      style={atomOneDark as any}
                                      language={match[1]}
                                      PreTag="div"
                                      {...props}
                                    />
                                  </>
                                ) : (


                                  <code className={className} {...props}>
                                    <>
                                      {children}
                                    </>
                                  </code>
                                )
                              }
                            }}
                          />
                          </div>
                        </div>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
