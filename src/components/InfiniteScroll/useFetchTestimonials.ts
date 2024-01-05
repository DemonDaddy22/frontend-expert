import { useEffect, useState } from 'react';
import { AE_TESTIMONIALS } from '../../constants';

const useFetchTestimonials = (page: number) => {
  const [testimonials, setTestimonials] = useState<Array<ITestimonial>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${AE_TESTIMONIALS.API_URI}?page=${page}`, {
        mode: 'cors',
      })
      .then((res) => res.json())
      .then((res) => {
        setTestimonials((prevTestimonials) => [
          ...prevTestimonials,
          ...(res?.data?.map((testimonial: any) => ({
            name: `${testimonial?.first_name} ${testimonial?.last_name}`.trim() || '',
            avatar: testimonial?.avatar || '',
            id: testimonial?.id || '',
          })) ?? []),
        ]);
        setHasNext(page < res?.total_pages);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return { testimonials, loading, error, hasNext };
};

export default useFetchTestimonials;
