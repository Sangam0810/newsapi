import React from 'react'

function NewsCard(props) {
  const {image, date, category, title, description, link  } = props;
  let newTitle;
  if(title){
    newTitle = String(title).trim().slice(0,80) + '...';
  }
  else{
    newTitle = "No title available"
  }
  let newDescripttion ;
  if(description){
    newDescripttion =  String(description).trim().slice(0,150) +'...';
  }
  else{
    newDescripttion = "A news app delivers news content from various sources";
  }
  return (
    <article className="flex flex-col bg-gray-200">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={image ? image : 'https://static.toiimg.com/thumb/imgsize-22128,msid-88556314,width-400,resizemode-4/88556314.jpg'}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
              >
                {category}
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
               {newTitle} 
              </h3>
              <p>{newDescripttion}</p>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>{date}</span>
                <span className='text-blue-400 hover:text-blue-700'><a href={link } target={'_blank'}>Read More</a></span>
              </div>
            </div>
          </article>
  )
}

export default NewsCard
