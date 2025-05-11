'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CorgiQuiz } from '@/components/corgi-quiz'

export default function Home() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Woof Woof!",
      description: "You've been licked by a virtual corgi!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-20 bg-gradient-to-b from-orange-50 to-transparent">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="text-6xl mb-6">🐕</div>
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl text-orange-600">
            Welcome to Corgi Corner
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            A place dedicated to the most adorable, short-legged, big-bottomed dogs on the planet!
          </p>
          <div className="mt-12 flex gap-4 justify-center">
            <Button size="lg" className="px-8 bg-orange-500 hover:bg-orange-600" onClick={showToast}>Corgi Boop!</Button>
            <Button size="lg" variant="outline" className="px-8 border-orange-300 hover:bg-orange-100">
              Explore Corgis
            </Button>
          </div>
        </div>
      </section>

      {/* About Corgis Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">About Corgis</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Adorable corgi" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Royal Dog</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Corgis, officially known as Pembroke Welsh Corgis, are one of the most beloved dog breeds in the world. 
                These adorable pups are known for their short legs, fox-like faces, and big personalities.
              </p>
              <p className="text-lg text-muted-foreground">
                Originally bred as herding dogs in Wales, Corgis became famous as the favorite breed of Queen Elizabeth II, 
                who owned more than 30 Corgis during her lifetime. Despite their small stature, they're energetic, intelligent, 
                and fiercely loyal companions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corgi Gallery Section */}
      <section id="gallery" className="container mx-auto px-4 py-20 bg-orange-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">Corgi Gallery</h2>
        
        <Carousel className="max-w-[1000px] mx-auto">
          <CarouselContent>
            <CarouselItem>
              <img 
                src="https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Corgi 1" 
                className="rounded-lg shadow-lg w-full aspect-video object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img 
                src="https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Corgi 2" 
                className="rounded-lg shadow-lg w-full aspect-video object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img 
                src="https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Corgi 3" 
                className="rounded-lg shadow-lg w-full aspect-video object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="mr-2" />
            <CarouselNext />
          </div>
        </Carousel>
      </section>

      {/* Fun Facts Section */}
      <section id="facts" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">Corgi Fun Facts</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="border-orange-200 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Fairy Steeds</h3>
              <p className="text-muted-foreground leading-relaxed">
                According to Welsh legend, corgis were the preferred mounts of fairies! The markings on their backs where a saddle would go are sometimes called "fairy saddles."
              </p>
            </CardContent>
          </Card>
          <Card className="border-orange-200 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Built for Herding</h3>
              <p className="text-muted-foreground leading-relaxed">
                Despite their short legs, corgis are excellent herders. They nip at the heels of cattle (earning them the nickname "heelers") and can duck quickly to avoid kicks.
              </p>
            </CardContent>
          </Card>
          <Card className="border-orange-200 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Sploot Masters</h3>
              <p className="text-muted-foreground leading-relaxed">
                Corgis are famous for the "sploot" - a position where they stretch their legs out behind them flat on the ground. It's as adorable as it sounds!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Corgi Types Section */}
      <section className="container mx-auto px-4 py-20 bg-orange-50">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">Types of Corgis</h2>
          
          <Tabs defaultValue="pembroke" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pembroke">Pembroke Welsh Corgi</TabsTrigger>
              <TabsTrigger value="cardigan">Cardigan Welsh Corgi</TabsTrigger>
            </TabsList>
            <TabsContent value="pembroke" className="mt-6 p-6 bg-white rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1537204696486-967f1b7198c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Pembroke Welsh Corgi" 
                    className="rounded-lg w-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Pembroke Welsh Corgi</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Shorter, more fox-like face</li>
                    <li>• Naturally bobbed or docked tail</li>
                    <li>• Straighter legs</li>
                    <li>• Colors: red, sable, fawn, black and tan</li>
                    <li>• The breed favored by Queen Elizabeth II</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cardigan" className="mt-6 p-6 bg-white rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1610041518868-f9c9262ee3a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Cardigan Welsh Corgi" 
                    className="rounded-lg w-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Cardigan Welsh Corgi</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Longer body and tail</li>
                    <li>• Rounded, more hound-like ears</li>
                    <li>• More color varieties including blue merle</li>
                    <li>• Slightly larger than Pembrokes</li>
                    <li>• The older of the two Corgi breeds</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent to-orange-50">
        <div className="max-w-[800px] mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-orange-600">
            Test Your Corgi Knowledge
          </h2>
          <p className="text-muted-foreground text-lg">
            Think you know everything about Corgis? Take our fun quiz to find out!
          </p>
        </div>
        
        <CorgiQuiz />
      </section>
      
      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-orange-600">
            Join the Corgi Community
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Connect with fellow corgi enthusiasts, share photos, and learn more about these amazing dogs!
          </p>
          <Button className="px-8 bg-orange-500 hover:bg-orange-600">
            Become a Corgi Friend
          </Button>
        </div>
      </section>
    </div>
  )
}


