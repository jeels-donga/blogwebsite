import React from 'react'

const Faq = () => {
    return (
        <div className='container '>
            <div className='my-5 tw-py-[2%] '>
                <h1 className='text-center tw-my-3 font-bold'><span className='tw-bg-[#00AAA1] tw-text-white'>Frequently</span> asked question</h1>
                <p className='text-center pb-3'>Did you come here for something in particular or just general Riker-bashing? And blowing</p>
                <div className='my-3 lg:tw-mx-[15%] tw-mx-0'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item mb-2">
                            <h2 className="accordion-header ">
                                <button className="accordion-button tw-bg-[#F2F8F7] active:tw-bg-[#DFF1F0]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    is there have any option for write blog?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body tw-bg-[#F2F8F7]">
                                    Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-2">
                            <h2 className="accordion-header ">
                                <button className="accordion-button collapsed tw-bg-[#F2F8F7] active:tw-bg-[#DFF1F0]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    can i change my plan later?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body tw-bg-[#F2F8F7]">
                                    Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-2">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed tw-bg-[#F2F8F7] active:tw-bg-[#DFF1F0]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Did you come here for something in particular?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body tw-bg-[#F2F8F7]">
                                    Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-2">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed tw-bg-[#F2F8F7] active:tw-bg-[#DFF1F0]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    is there have any option for write blog?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body tw-bg-[#F2F8F7]">
                                    Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-2">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed tw-bg-[#F2F8F7] active:tw-bg-[#DFF1F0]" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    something in particular or just general Riker-bashing?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body tw-bg-[#F2F8F7]">
                                    Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mb-3'>
                    <h3 className='text-center'>Can't find an answer to your question?</h3>
                </div>
                <div className='d-flex tw-justify-center my-4 tw-mb-[12%]'>
                    <button className='tw-text-[15px] py-2 px-3 tw-border tw-rounded-md tw-text-[#00AAA1] tw-border-[#00AAA1]'>Contact Us <span className='tw-text-[15-px] tw-me-1'>&#8594;</span></button>
                </div>
            </div>
        </div>
    )
}

export default Faq
