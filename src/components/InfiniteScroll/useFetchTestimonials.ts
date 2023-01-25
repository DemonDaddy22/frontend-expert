import axios from 'axios';
import { useEffect, useState } from 'react';
import { AE_TESTIMONIALS } from '../../constants';

const useFetchTestimonials = (size: number, page: number) => {
  const [testimonials, setTestimonials] = useState<Array<ITestimonial>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    let cancel;
    setLoading(true);
    axios
      .get(AE_TESTIMONIALS.API_URI, {
        withCredentials: false,
        params: { size, page },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setTestimonials((prevTestimonials) => [
          ...prevTestimonials,
          ...(res.data?.data?.map((testimonial: any) => ({
            name: testimonial?.name ?? '',
            id: testimonial?._id ?? '',
          })) ?? []),
        ]);
        setHasNext(page < res.data?.totalPages);
        setError(null);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setError(err);
        }
      })
      .finally(() => setLoading(false));
  }, [size, page]);

  return { testimonials, loading, error, hasNext };
};

export default useFetchTestimonials;
