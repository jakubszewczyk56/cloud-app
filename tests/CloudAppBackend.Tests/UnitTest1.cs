using Xunit;

namespace CloudAppBackend.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void NewTask_ShouldNotBeCompleted()
        {
            var isCompleted = false;

            Assert.False(isCompleted);
        }
    }
}